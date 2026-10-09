import bpy
from mathutils import Vector
from pathlib import Path

OUT = Path(__file__).resolve().parent
NAVY = (0.043, 0.112, 0.216, 1.0)
TEAL = (0.082, 0.341, 0.396, 1.0)
WHITE = (0.94, 0.98, 1.0, 1.0)
DARK = (0.012, 0.035, 0.075, 1.0)
SCALE = 0.01


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for datablocks in (bpy.data.curves, bpy.data.meshes, bpy.data.materials, bpy.data.cameras, bpy.data.lights):
        for block in list(datablocks):
            if block.users == 0:
                datablocks.remove(block)


def gradient_material(name, color_a, color_b):
    material = bpy.data.materials.new(name)
    material.diffuse_color = color_a
    material.use_nodes = True
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    principled = nodes.get("Principled BSDF")
    principled.inputs["Metallic"].default_value = 0.25
    principled.inputs["Roughness"].default_value = 0.26
    tex = nodes.new("ShaderNodeTexCoord")
    separate = nodes.new("ShaderNodeSeparateXYZ")
    ramp = nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color = color_a
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


def add_panel(name, z, dimensions, material, bevel):
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, z))
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    bevel_mod = obj.modifiers.new("Rounded machined edge", "BEVEL")
    bevel_mod.width = bevel
    bevel_mod.segments = 8
    bevel_mod.harden_normals = True
    normal_mod = obj.modifiers.new("Weighted face normals", "WEIGHTED_NORMAL")
    normal_mod.keep_sharp = True
    obj.data.materials.append(material)
    return obj


def svg_xy(x, y):
    # Match the 320 × 320 napitalai-icon.svg viewBox, centered on the badge.
    return (x - 160) * SCALE, (160 - y) * SCALE


def add_stroke(name, svg_points, material, radius, z):
    curve = bpy.data.curves.new(name + " curve", "CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 16
    curve.bevel_depth = radius
    curve.bevel_resolution = 8
    spline = curve.splines.new("POLY")
    spline.points.add(len(svg_points) - 1)
    for point, (x, y) in zip(spline.points, svg_points):
        px, py = svg_xy(x, y)
        point.co = (px, py, z, 1.0)
    obj = bpy.data.objects.new(name, curve)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(material)
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
    direction = Vector((0, 0, 0)) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    return obj


def build_icon():
    clear_scene()
    enamel = gradient_material("Navy to deep teal enamel", NAVY, TEAL)
    edge = plain_material("Dark teal badge and monogram edges", (0.018, 0.075, 0.115, 1.0), 0.25, 0.28)
    white = plain_material("Porcelain white monogram", WHITE, 0.18, 0.2)

    add_panel("Deep beveled badge backing", -0.20, (3.48, 3.48, 0.26), edge, 0.36)
    add_panel("Navy to teal enamel badge", 0.0, (3.40, 3.40, 0.34), enamel, 0.34)

    # Trace the rounded N and horizontal A-suggesting crossbar in the SVG.
    n_points = [(90, 246), (90, 74), (230, 246), (230, 74)]
    crossbar_points = [(101, 191), (184, 191)]
    add_stroke("N deep extrusion", n_points, edge, 0.272, 0.25)
    add_stroke("A crossbar deep extrusion", crossbar_points, edge, 0.145, 0.26)
    add_stroke("Raised rounded N", n_points, white, 0.25, 0.39)
    add_stroke("Raised A-suggesting crossbar", crossbar_points, white, 0.11, 0.41)

    add_area_light("Large soft key", (-3.0, 4.2, 7.0), 850, 6.0, (0.82, 0.92, 1.0))
    add_area_light("Teal rim light", (3.0, 1.8, 5.0), 560, 4.0, (0.4, 0.92, 1.0))
    add_area_light("Warm lower fill", (1.0, -3.5, 6.0), 300, 5.0, (1.0, 0.94, 0.83))

    camera_data = bpy.data.cameras.new("3D icon camera")
    camera = bpy.data.objects.new("3D icon camera", camera_data)
    bpy.context.collection.objects.link(camera)
    camera.location = (0, -0.65, 10.0)
    direction = Vector((0, 0, 0)) - camera.location
    camera.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    camera_data.type = "ORTHO"
    camera_data.ortho_scale = 4.25
    bpy.context.scene.camera = camera

    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 1024
    scene.render.resolution_y = 1024
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = True
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.color_depth = "8"
    scene.render.image_settings.compression = 18
    scene.render.filepath = str(OUT / "napitalai-icon-3d.png")
    scene.view_settings.view_transform = "AgX"
    scene.world.use_nodes = True
    scene.world.node_tree.nodes.get("Background").inputs["Color"].default_value = (0.11, 0.13, 0.16, 1.0)
    scene.world.node_tree.nodes.get("Background").inputs["Strength"].default_value = 0.3

    bpy.ops.wm.save_as_mainfile(filepath=str(OUT / "napitalai-icon-3d.blend"))
    bpy.ops.render.render(write_still=True)


build_icon()
