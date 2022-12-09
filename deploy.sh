yarn build
rsync dist/bundle.js buzz@coding.buzz:/home/buzz/se4x/static
rsync index.html buzz@coding.buzz:/home/buzz/se4x
rsync -r assets buzz@coding.buzz:/home/buzz/se4x