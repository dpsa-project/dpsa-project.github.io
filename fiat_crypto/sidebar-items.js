window.SIDEBAR_ITEMS = {"mod":[["curve25519_32","Autogenerated: ‘src/ExtractionOCaml/unsaturated_solinas’ –lang Rust –inline 25519 32 ‘(auto)’ ‘2^255 - 19’ carry_mul carry_square carry add sub opp selectznz to_bytes from_bytes relax carry_scmul121666 curve description: 25519 machine_wordsize = 32 (from “32”) requested operations: carry_mul, carry_square, carry, add, sub, opp, selectznz, to_bytes, from_bytes, relax, carry_scmul121666 n = 10 (from “(auto)”) s-c = 2^255 - [(1, 19)] (from “2^255 - 19”) tight_bounds_multiplier = 1 (from “”)"],["curve25519_64","Autogenerated: ‘src/ExtractionOCaml/unsaturated_solinas’ –lang Rust –inline 25519 64 ‘(auto)’ ‘2^255 - 19’ carry_mul carry_square carry add sub opp selectznz to_bytes from_bytes relax carry_scmul121666 curve description: 25519 machine_wordsize = 64 (from “64”) requested operations: carry_mul, carry_square, carry, add, sub, opp, selectznz, to_bytes, from_bytes, relax, carry_scmul121666 n = 5 (from “(auto)”) s-c = 2^255 - [(1, 19)] (from “2^255 - 19”) tight_bounds_multiplier = 1 (from “”)"],["curve25519_scalar_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline 25519_scalar 32 ‘2^252 + 27742317777372353535851937790883648493’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: 25519_scalar machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed (from “2^252 + 27742317777372353535851937790883648493”)"],["curve25519_scalar_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline 25519_scalar 64 ‘2^252 + 27742317777372353535851937790883648493’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: 25519_scalar machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed (from “2^252 + 27742317777372353535851937790883648493”)"],["curve25519_solinas_64","Autogenerated: ‘src/ExtractionOCaml/solinas_reduction’ –lang Rust –inline curve25519_solinas 64 ‘2^255 - 19’ mul square curve description: curve25519_solinas machine_wordsize = 64 (from “64”) requested operations: mul, square s-c = 2^255 - [(1, 19)] (from “2^255 - 19”)"],["p224_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p224 32 ‘2^224 - 2^96 + 1’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p224 machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffffffffffffffffffffffffffff000000000000000000000001 (from “2^224 - 2^96 + 1”)"],["p224_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p224 64 ‘2^224 - 2^96 + 1’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p224 machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffffffffffffffffffffffffffff000000000000000000000001 (from “2^224 - 2^96 + 1”)"],["p256_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p256 32 ‘2^256 - 2^224 + 2^192 + 2^96 - 1’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p256 machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff (from “2^256 - 2^224 + 2^192 + 2^96 - 1”)"],["p256_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p256 64 ‘2^256 - 2^224 + 2^192 + 2^96 - 1’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p256 machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff (from “2^256 - 2^224 + 2^192 + 2^96 - 1”)"],["p256_scalar_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p256_scalar 32 ‘2^256 - 2^224 + 2^192 - 89188191075325690597107910205041859247’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p256_scalar machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551 (from “2^256 - 2^224 + 2^192 - 89188191075325690597107910205041859247”)"],["p256_scalar_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p256_scalar 64 ‘2^256 - 2^224 + 2^192 - 89188191075325690597107910205041859247’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p256_scalar machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551 (from “2^256 - 2^224 + 2^192 - 89188191075325690597107910205041859247”)"],["p384_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p384 32 ‘2^384 - 2^128 - 2^96 + 2^32 - 1’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p384 machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff (from “2^384 - 2^128 - 2^96 + 2^32 - 1”)"],["p384_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p384 64 ‘2^384 - 2^128 - 2^96 + 2^32 - 1’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p384 machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff (from “2^384 - 2^128 - 2^96 + 2^32 - 1”)"],["p384_scalar_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p384_scalar 32 ‘2^384 - 1388124618062372383947042015309946732620727252194336364173’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p384_scalar machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973 (from “2^384 - 1388124618062372383947042015309946732620727252194336364173”)"],["p384_scalar_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p384_scalar 64 ‘2^384 - 1388124618062372383947042015309946732620727252194336364173’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p384_scalar machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973 (from “2^384 - 1388124618062372383947042015309946732620727252194336364173”)"],["p434_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline p434 64 ‘2^216 * 3^137 - 1’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: p434 machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0x2341f271773446cfc5fd681c520567bc65c783158aea3fdc1767ae2ffffffffffffffffffffffffffffffffffffffffffffffffffffff (from “2^216 * 3^137 - 1”)"],["p448_solinas_32","Autogenerated: ‘src/ExtractionOCaml/unsaturated_solinas’ –lang Rust –inline p448 32 16 ‘2^448 - 2^224 - 1’ carry_mul carry_square carry add sub opp selectznz to_bytes from_bytes relax curve description: p448 machine_wordsize = 32 (from “32”) requested operations: carry_mul, carry_square, carry, add, sub, opp, selectznz, to_bytes, from_bytes, relax n = 16 (from “16”) s-c = 2^448 - [(2^224, 1), (1, 1)] (from “2^448 - 2^224 - 1”) tight_bounds_multiplier = 1 (from “”)"],["p448_solinas_64","Autogenerated: ‘src/ExtractionOCaml/unsaturated_solinas’ –lang Rust –inline p448 64 8 ‘2^448 - 2^224 - 1’ carry_mul carry_square carry add sub opp selectznz to_bytes from_bytes relax curve description: p448 machine_wordsize = 64 (from “64”) requested operations: carry_mul, carry_square, carry, add, sub, opp, selectznz, to_bytes, from_bytes, relax n = 8 (from “8”) s-c = 2^448 - [(2^224, 1), (1, 1)] (from “2^448 - 2^224 - 1”) tight_bounds_multiplier = 1 (from “”)"],["p521_64","Autogenerated: ‘src/ExtractionOCaml/unsaturated_solinas’ –lang Rust –inline p521 64 9 ‘2^521 - 1’ carry_mul carry_square carry add sub opp selectznz to_bytes from_bytes relax curve description: p521 machine_wordsize = 64 (from “64”) requested operations: carry_mul, carry_square, carry, add, sub, opp, selectznz, to_bytes, from_bytes, relax n = 9 (from “9”) s-c = 2^521 - [(1, 1)] (from “2^521 - 1”) tight_bounds_multiplier = 1 (from “”)"],["poly1305_32","Autogenerated: ‘src/ExtractionOCaml/unsaturated_solinas’ –lang Rust –inline poly1305 32 ‘(auto)’ ‘2^130 - 5’ carry_mul carry_square carry add sub opp selectznz to_bytes from_bytes relax curve description: poly1305 machine_wordsize = 32 (from “32”) requested operations: carry_mul, carry_square, carry, add, sub, opp, selectznz, to_bytes, from_bytes, relax n = 5 (from “(auto)”) s-c = 2^130 - [(1, 5)] (from “2^130 - 5”) tight_bounds_multiplier = 1 (from “”)"],["poly1305_64","Autogenerated: ‘src/ExtractionOCaml/unsaturated_solinas’ –lang Rust –inline poly1305 64 3 ‘2^130 - 5’ carry_mul carry_square carry add sub opp selectznz to_bytes from_bytes relax curve description: poly1305 machine_wordsize = 64 (from “64”) requested operations: carry_mul, carry_square, carry, add, sub, opp, selectznz, to_bytes, from_bytes, relax n = 3 (from “3”) s-c = 2^130 - [(1, 5)] (from “2^130 - 5”) tight_bounds_multiplier = 1 (from “”)"],["secp256k1_dettman_64","Autogenerated: ‘src/ExtractionOCaml/dettman_multiplication’ –lang Rust –inline secp256k1_dettman 64 5 48 ‘2^256 - 4294968273’ mul square curve description: secp256k1_dettman machine_wordsize = 64 (from “64”) requested operations: mul, square n = 5 (from “5”) last_limb_width = 48 (from “48”) s-c = 2^256 - [(1, 4294968273)] (from “2^256 - 4294968273”) inbounds_multiplier: None (from “”)"],["secp256k1_montgomery_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline secp256k1_montgomery 32 ‘2^256 - 2^32 - 977’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: secp256k1_montgomery machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f (from “2^256 - 2^32 - 977”)"],["secp256k1_montgomery_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline secp256k1_montgomery 64 ‘2^256 - 2^32 - 977’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: secp256k1_montgomery machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f (from “2^256 - 2^32 - 977”)"],["secp256k1_montgomery_scalar_32","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline secp256k1_montgomery_scalar 32 ‘2^256 - 432420386565659656852420866394968145599’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: secp256k1_montgomery_scalar machine_wordsize = 32 (from “32”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141 (from “2^256 - 432420386565659656852420866394968145599”)"],["secp256k1_montgomery_scalar_64","Autogenerated: ‘src/ExtractionOCaml/word_by_word_montgomery’ –lang Rust –inline secp256k1_montgomery_scalar 64 ‘2^256 - 432420386565659656852420866394968145599’ mul square add sub opp from_montgomery to_montgomery nonzero selectznz to_bytes from_bytes one msat divstep divstep_precomp curve description: secp256k1_montgomery_scalar machine_wordsize = 64 (from “64”) requested operations: mul, square, add, sub, opp, from_montgomery, to_montgomery, nonzero, selectznz, to_bytes, from_bytes, one, msat, divstep, divstep_precomp m = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141 (from “2^256 - 432420386565659656852420866394968145599”)"]]};