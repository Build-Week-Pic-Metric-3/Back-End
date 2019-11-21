//user2img6 still need to be run through DS api and seeded
//user2img7

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("analysis")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("analysis").insert([
        {
          user_id: 1,
          faces_source: "no_faces",
          hash: "9c5354edfa73fb8c609cea49dcba387d",
          original:
            "http://picmetric3.s3.amazonaws.com/9c5354edfa73fb8c609cea49dcba387d.png",
          resnet:
            '{"comic_book": "0.96984404", "book_jacket": "0.009337196", "totem_pole": "0.003540449"}',
          yolov3: '{"person": "96.1277186870575"}',
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/79bc4c864a4b6acf8dc0bd0951dfc504_yolov3.png"
        },
        {
          user_id: 1,
          faces_source: "no_faces",
          hash: "24ad868c2e1607b09816f83c00da40c9",
          original:
            "http://picmetric3.s3.amazonaws.com/24ad868c2e1607b09816f83c00da40c9.png",
          resnet:
            '{"sweatshirt": "0.8506566", "jersey": "0.1403916", "wool": "0.0077001615"}',
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/6ccea27866f964cb164bcf7772c9008a_yolov3.png"
        },
        {
          user_id: 1,
          faces_source: "no_faces",
          hash: "204b18a09f4734f17651e8f357ef4532",
          original:
            "http://picmetric3.s3.amazonaws.com/204b18a09f4734f17651e8f357ef4532.png",
          resnet:
            '{"chain_saw": "0.46338508", "pencil_sharpener": "0.22254184", "syringe": "0.05799922"}',
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/53be263534dbe4bff65be56e22dbf821_yolov3.png"
        },
        {
          user_id: 2,
          faces_source: "no_faces",
          hash: "b542e31cb3be7c82cb3cd6b2c5a590bd",
          original:
            "http://picmetric3.s3.amazonaws.com/b542e31cb3be7c82cb3cd6b2c5a590bd.png",
          resnet:
            '{"mortarboard": "0.32839224", "book_jacket": "0.11491376", "military_uniform": "0.03486016"}',
          yolov3: '{"person": "99.89861845970154"}',
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/2103d498ce8a7171d8448624bc350b0a_yolov3.png"
        },
        {
          user_id: 2,
          faces_source: "no_faces",
          hash: "e151fc74ce9f38beaab304996bf8c90e",
          original:
            "http://picmetric3.s3.amazonaws.com/e151fc74ce9f38beaab304996bf8c90e.png",
          resnet:
            '{"sulphur_butterfly": "0.39262107", "hummingbird": "0.1578669", "vase": "0.13751495"}',
          yolov3: '{"potted plant": "79.59641218185425"}',
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/7e9cdfb47b9a2973ed32c45a0211a593_yolov3.png"
        },
        {
          user_id: 2,
          faces_source: "no_faces",
          hash: "204b18a09f4734f17651e8f357ef4532",
          original:
            "http://picmetric3.s3.amazonaws.com/204b18a09f4734f17651e8f357ef4532.png",
          resnet:
            '{"chain_saw": "0.46338508", "pencil_sharpener": "0.22254184", "syringe": "0.05799922"}',
          yolov3: null,
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/53be263534dbe4bff65be56e22dbf821_yolov3.png"
        },
        {
          user_id: 2,
          faces_source: "no_faces",
          hash: "9fd42d50b70d7755621893025d834d76",
          original:
            "http://picmetric3.s3.amazonaws.com/9fd42d50b70d7755621893025d834d76.png",
          resnet:
            '{"tank": "0.9979645", "amphibian": "0.0005064154", "projectile": "0.00049987144"}',
          yolov3: '{"boat": "58.966684341430664", "truck": "56.8989634513855"}',
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/98dcfaad3138368add78fb561a9e2028_yolov3.png"
        },
        {
          user_id: 2,
          faces_source: "no_faces",
          hash: "00a781b08f5e682b74be03056e655cd4",
          original:
            "http://picmetric3.s3.amazonaws.com/00a781b08f5e682b74be03056e655cd4.png",
          resnet:
            '{"American_Staffordshire_terrier": "0.27031204", "Staffordshire_bullterrier": "0.26776198", "kelpie": "0.21781582"}',
          yolov3: '{"dog": "99.11207556724548", "cat": "99.16242957115173"}',
          yolov3_source:
            "http://picmetric3.s3.amazonaws.com/e91e35cd02f99a45ad86da0ea1d83376_yolov3.png"
        }
      ]);
    });
};
