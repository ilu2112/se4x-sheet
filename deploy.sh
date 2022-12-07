yarn build
rsync dist/bundle.js buzz@coding.buzz:/home/buzz/se4x-sheet/static
rsync index.html buzz@coding.buzz:/home/buzz/se4x-sheet
rsync -r assets buzz@coding.buzz:/home/buzz/se4x-sheet