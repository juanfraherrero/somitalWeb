import os
import argparse
import json

relative_path = "/activities/sierraVentana/"

def rename_images(directory, prefix):
    # Obtener la lista de archivos en el directorio
    files = os.listdir(directory)
    # Filtrar solo los archivos con extensiones e imágenes
    image_files = [f for f in files if f.endswith('.png') or f.endswith('.jpg') or f.endswith('.jpeg')]
    # Ordenar los archivos de imagen
    image_files.sort()

    renamed_images = []

    # Renombrar cada imagen con el prefijo y un número secuencial
    for idx, filename in enumerate(image_files):
        new_name = f"{prefix}_{idx+1}{os.path.splitext(filename)[1]}"
        os.rename(os.path.join(directory, filename), os.path.join(directory, new_name))
        renamed_images.append(relative_path + new_name)
        print(f"Renombrando {filename} a {new_name}")
    
    # Crear un archivo JSON con la lista de nombres renombrados
    json_filename = os.path.join(directory, 'imagesNames.json')
    with open(json_filename, 'w') as json_file:
        json.dump(renamed_images, json_file, indent=4)
    print(f"Archivo JSON generado: {json_filename}")

# Argumentos de línea de comandos
parser = argparse.ArgumentParser(description='Renombrar imágenes en un directorio')
parser.add_argument('directory', type=str, help='Ruta del directorio donde se encuentran las imágenes')
parser.add_argument('prefix', type=str, help='Prefijo para el nombre de las imágenes')

args = parser.parse_args()

# Obtener la ruta absoluta del directorio de imágenes
directory = os.path.abspath(args.directory)

# Llamada a la función para renombrar imágenes
rename_images(directory, args.prefix)