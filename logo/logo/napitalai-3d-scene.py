import bpy
import math
from mathutils import Vector
from pathlib import Path

OUT = Path(__file__).resolve().parent
FONT_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-CondensedBold.ttf"
FONT_REGULAR = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
NAVY = (0.043, 0.112, 0.216, 1.0)
TEAL = (0.008, 0.235, 0.292, 1.0)
WHITE = (0.94, 0.98, 1.0, 1.0)
DARK = (0.012, 0.035, 0.075, 1.0)


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for datablocks in (bpy.data.curves, bpy.data.meshes, bpy.data.materials, bpy.data.cameras, bpy.data.lights):
        for block in list(datablocks):
            if block.users == 0:
                datablocks.remove(block)


def gradient_material(name, color_a, color_b, metallic=0.16, roughness=0.3):
    material = bpy.data.materials.new(name)
    material.diffuse_color = color_a
    material.use_nodes = True
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    principled = nodes.get("Principled BSDF")
    principled.inputs["Metallic"].default_value = metallic
    principled.inputs["Roughness"].default_value = roughness
    tex = nodes.new("ShaderNodeTexCoord")
    separate = nodes.new("ShaderNodeSeparateXYZ")
    ramp = nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = color_a
    ramp.color_ramp.elements[1].position = 1.0
    ramp.color_ramp.elements[1].color = color_b
    links.new(tex.outputs["Generated"], separate.inputs["Vector"])
    links.new(separate.outputs["X"], ramp.inputs["Fac"])
    links.new(ramp.outputs["Color"], principled.inputs["Base Color"])
    return material


def plain_material(name, color, metallic=0.12, roughness=0.24):
    material = bpy.data.materials.new(name)
    material.diffuse_color = color
    material.use_nodes = True
    principled = material.node_tree.nodes.get("Principled BSDF")
    principled.inputs["Base Color"].default_value = color
    principled.inputs["Metallic"].default_value = metallic
    principled.inputs["Roughness"].default_value = roughness
    return material


def add_rounded_panel(name, location, dimensions, material, bevel):
    bpy.ops.mesh.primitive_cube_add(size=1, location=location)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    bevel_mod = obj.modifiers.new("Soft machined edge", "BEVEL")
    bevel_mod.width = bevel
    bevel_mod.segments = 8
    bevel_mod.harden_normals = True
    normal_mod = obj.modifiers.new("Weighted face normals", "WEIGHTED_NORMAL")
    normal_mod.keep_sharp = True
    obj.data.materials.append(material)
    return obj


def add_poly_stroke(name, points, material, radius, z, resolution=6):
    curve = bpy.data.curves.new(name + " 3D curve", "CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 16
    curve.bevel_depth = radius
    curve.bevel_resolution = resolution
    spline = curve.splines.new("POLY")
    spline.points.add(len(points) - 1)
    for point, (x, y) in zip(spline.points, points):
        point.co = (x, y, z, 1.0)
    obj = bpy.data.objects.new(name, curve)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(material)
    return obj


def icon_xy(svg_x, svg_y, left, bottom, units_per_100px=1.0):
    return left + svg_x * units_per_100px / 100.0, bottom + (320 - svg_y) * units_per_100px / 100.0


def add_monogram(left, bottom, scale, white_mat, edge_mat, z=0.35):
    # Layered extrusion gives the shared N/A strokes an angled, machined edge.
    n_points_px = [(90, 246), (90, 74), (230, 246), (230, 74)]
    n_points = [icon_xy(x, y, left, bottom, scale) for x, y in n_points_px]
    rear_points = [(x + 0.055 * scale, y - 0.075 * scale) for x, y in n_points]
    crossbar_px = [(101, 218), (188, 195)]
    crossbar = [icon_xy(x, y, left, bottom, scale) for x, y in crossbar_px]
    rear_crossbar = [(x + 0.055 * scale, y - 0.075 * scale) for x, y in crossbar]
    add_poly_stroke("N monogram | deep extruded edge", rear_points, edge_mat, 0.272 * scale, z - 0.12)
    add_poly_stroke("A tilt | deep extruded edge", rear_crossbar, edge_mat, 0.145 * scale, z - 0.11)
    add_poly_stroke("N monogram | polished face", n_points, white_mat, 0.245 * scale, z + 0.005)
    add_poly_stroke("A tilt | polished diagonal crossbar", crossbar, white_mat, 0.105 * scale, z + 0.018)


def fit_text_width(obj, width):
    bpy.context.view_layer.update()
    measured = max(obj.dimensions.x, 0.0001)
    factor = width / measured
    obj.scale = (obj.scale.x * factor, obj.scale.y * factor, obj.scale.z * factor)
    bpy.context.view_layer.update()


def add_text(name, body, font, location, width, material, size, extrude=0.05, bevel=0.012, spacing=1.0):
    curve = bpy.data.curves.new(name + " lettering", "FONT")
    curve.body = body
    curve.font = font
    curve.size = size
    curve.space_character = spacing
    curve.extrude = extrude
    curve.bevel_depth = bevel
    curve.bevel_resolution = 4
    curve.resolution_u = 16
    obj = bpy.data.objects.new(name, curve)
    bpy.context.collection.objects.link(obj)
    obj.location = location
    obj.data.materials.append(material)
    fit_text_width(obj, width)
    return obj


def add_area_light(name, location, energy, size, color):
    data = bpy.data.lights.new(name, "AREA")
    data.energy = energy
    data.shape = "DISK"
    data.size = size
    data.color = color
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    obj.location = location
    direction = Vector((0.0, 0.0, 0.0)) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    return obj


def configure_camera(target, width, resolution_x, resolution_y, transparent=True):
    data = bpy.data.cameras.new("Product camera")
    camera = bpy.data.objects.new("Product camera", data)
    bpy.context.collection.objects.link(camera)
    camera.location = (target[0], target[1] - 1.5, 23.0)
    direction = Vector((target[0], target[1], 0.0)) - camera.location
    camera.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    data.type = "ORTHO"
    data.ortho_scale = width
    bpy.context.scene.camera = camera
    scene = bpy.context.scene
    scene.render.resolution_x = resolution_x
    scene.render.resolution_y = resolution_y
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = transparent
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.color_depth = "8"
    scene.render.image_settings.compression = 18
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.film_transparent = transparent
    scene.view_settings.view_transform = "AgX"
    scene.render.image_settings.color_mode = "RGBA"
    scene.camera.data.lens = 55
    scene.render.resolution_x = resolution_x
    scene.render.resolution_y = resolution_y
    scene.world.color = (0.18, 0.18, 0.18)
    return camera


def build_logo():
    clear_scene()
    navy_teal = gradient_material("Midnight navy to deep teal enamel", NAVY, (0.015, 0.255, 0.32, 1.0), 0.25, 0.26)
    edge = plain_material("Dark teal extrusion and edge", (0.018, 0.075, 0.115, 1.0), 0.25, 0.28)
    white = plain_material("Porcelain white lettering", WHITE, 0.18, 0.2)
    shadow = plain_material("Soft navy cast shadow", DARK, 0.05, 0.36)

    add_rounded_panel("Raised navy and teal nameplate", (0, 0, 0), (13.45, 3.55, 0.34), navy_teal, 0.3)
    add_rounded_panel("Deep bevel backing", (0.055, -0.09, -0.21), (13.52, 3.59, 0.25), edge, 0.31)

    add_monogram(-6.35, -1.32, 0.82, white, edge, 0.35)

    divider = add_poly_stroke("Raised monogram separator", [(-3.24, -0.98), (-3.24, 0.98)], white, 0.025, 0.39, 4)
    divider.data.bevel_depth = 0.025

    font_bold = bpy.data.fonts.load(FONT_BOLD)
    font_regular = bpy.data.fonts.load(FONT_REGULAR)
    title_shadow = add_text("Napitalai shadow", "Napitalai", font_bold, (-2.78, 0.36, 0.28), 7.65, shadow, 0.94, 0.045, 0.012)
    title = add_text("Napitalai | raised lettering", "Napitalai", font_bold, (-2.82, 0.42, 0.38), 7.65, white, 0.94, 0.065, 0.016)
    subtitle_shadow_1 = add_text("Subtitle shadow | ICT", "INFORMATION, COMMUNICATION TECHNOLOGY", font_bold, (-2.76, -0.42, 0.25), 8.9, shadow, 0.30, 0.02, 0.006, 1.03)
    subtitle_1 = add_text("ICT consultancy descriptor", "INFORMATION, COMMUNICATION TECHNOLOGY", font_bold, (-2.81, -0.37, 0.34), 8.9, white, 0.30, 0.035, 0.01, 1.03)
    subtitle_shadow_2 = add_text("Subtitle shadow | training", "AND TRAINING CONSULTANCY", font_bold, (-2.76, -0.94, 0.25), 6.25, shadow, 0.30, 0.02, 0.006, 1.03)
    subtitle_2 = add_text("Training consultancy descriptor", "AND TRAINING CONSULTANCY", font_bold, (-2.81, -0.89, 0.34), 6.25, white, 0.30, 0.035, 0.01, 1.03)

    add_area_light("Large soft key", (-4.8, 5.5, 8.5), 980, 7.5, (0.82, 0.92, 1.0))
    add_area_light("Teal rim light", (5.2, 1.6, 6.0), 720, 5.5, (0.4, 0.92, 1.0))
    add_area_light("Warm lettering fill", (1.0, -4.8, 7.0), 430, 6.0, (1.0, 0.94, 0.83))
    configure_camera((0, 0, 0), 14.65, 2160, 600)
    scene = bpy.context.scene
    scene.render.filepath = str(OUT / "napitalai-logo-3d.png")
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.film_transparent = True
    scene.camera.data.dof.use_dof = False
    scene.render.resolution_percentage = 100
    scene.render.image_settings.color_depth = "8"
    scene.render.resolution_x = 2160
    scene.render.resolution_y = 600
    scene.render.filepath = str(OUT / "napitalai-logo-3d.png")
    scene.render.engine = "BLENDER_EEVEE"
    scene.world.use_nodes = True
    scene.world.node_tree.nodes.get("Background").inputs["Color"].default_value = (0.11, 0.13, 0.16, 1)
    scene.world.node_tree.nodes.get("Background").inputs["Strength"].default_value = 0.3
    bpy.ops.wm.save_as_mainfile(filepath=str(OUT / "napitalai-logo-3d.blend"))
    bpy.ops.render.render(write_still=True)

    # Also render the raised monogram as an independent transparent square asset.
    logo_objects = list(scene.objects)
    for obj in logo_objects:
        obj.hide_render = True
    clear_scene()
    navy_teal = gradient_material("Monogram navy to teal enamel", NAVY, (0.015, 0.255, 0.32, 1.0), 0.25, 0.26)
    edge = plain_material("Monogram deep extrusion", (0.018, 0.075, 0.115, 1.0), 0.25, 0.28)
    white = plain_material("Monogram porcelain face", WHITE, 0.18, 0.2)
    add_rounded_panel("Raised monogram badge", (0, 0, 0), (3.4, 3.4, 0.34), navy_teal, 0.34)
    add_rounded_panel("Badge dark extrusion", (0.055, -0.09, -0.21), (3.47, 3.47, 0.25), edge, 0.35)
    add_monogram(-1.32, -1.32, 0.82, white, edge, 0.35)
    add_area_light("Icon key", (-3.0, 4.2, 7.0), 850, 6.0, (0.82, 0.92, 1.0))
    add_area_light("Icon teal rim", (3.0, 1.8, 5.0), 560, 4.0, (0.4, 0.92, 1.0))
    configure_camera((0, 0, 0), 3.9, 1024, 1024)
    scene = bpy.context.scene
    scene.render.filepath = str(OUT / "napitalai-icon-3d.png")
    scene.render.resolution_x = 1024
    scene.render.resolution_y = 1024
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.film_transparent = True
    scene.world.use_nodes = True
    scene.world.node_tree.nodes.get("Background").inputs["Strength"].default_value = 0.3
    bpy.ops.render.render(write_still=True)


build_logo()
