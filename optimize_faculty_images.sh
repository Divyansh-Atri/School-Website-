#!/bin/bash
cd /home/divyansh/daroh-school-site-beauty/public/faculty

# List of faculty images to process
images=(
  "pintu.png"
  "chem.png"
  "sharmila.png"
  "akash.png"
  "vinod.png"
  "dharam.png"
  "alka.png"
  "guleria.png"
  "naresh.png"
  "neeraj.png"
)

for img in "${images[@]}"; do
  if [ -f "$img" ]; then
    echo "Processing $img..."
    convert "$img" -resize 600x800^ -gravity center -extent 600x800 -quality 85 "optimized_$img"
    mv "optimized_$img" "$img"
  else
    echo "Warning: $img not found"
  fi
done
