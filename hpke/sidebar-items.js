window.SIDEBAR_ITEMS = {"enum":[["HpkeError","Describes things that can go wrong in the HPKE protocol"],["OpModeR","The operation mode of the HPKE session (receiver’s view). This is how the sender authenticates their identity to the receiver. This authentication information can include a preshared key, the identity key of the sender, both, or neither. `Base` is the only mode that does not provide any kind of sender identity authentication."],["OpModeS","The operation mode of the HPKE session (sender’s view). This is how the sender authenticates their identity to the receiver. This authentication information can include a preshared key, the identity key of the sender, both, or neither. `Base` is the only mode that does not provide any kind of sender identity authentication."]],"fn":[["setup_receiver","Initiates a decryption context given a private key `sk_recip` and an encapsulated key which was encapsulated to `sk_recip`’s corresponding public key"],["setup_sender","Initiates an encryption context to the given recipient public key"],["single_shot_open","Does a `setup_receiver` and `AeadCtxR::open` in one shot. That is, it does a key decapsulation for the specified recipient and decrypts the provided ciphertext. See `setup::setup_reciever` and `AeadCtxR::open` for more detail."],["single_shot_open_in_place_detached","Does a `setup_receiver` and `AeadCtxR::open_in_place_detached` in one shot. That is, it does a key decapsulation for the specified recipient and decrypts the provided ciphertext in place. See `setup::setup_reciever` and `AeadCtxR::open_in_place_detached` for more detail."],["single_shot_seal","Does a `setup_sender` and `AeadCtxS::seal` in one shot. That is, it does a key encapsulation to the specified recipient and encrypts the provided plaintext. See `setup::setup_sender` and `AeadCtxS::seal` for more detail."],["single_shot_seal_in_place_detached","Does a `setup_sender` and `AeadCtxS::seal_in_place_detached` in one shot. That is, it does a key encapsulation to the specified recipient and encrypts the provided plaintext in place. See `setup::setup_sender` and `AeadCtxS::seal_in_place_detached` for more detail."]],"mod":[["aead","Traits and structs for authenticated encryption schemes"],["kdf","Traits and structs for key derivation functions"],["kem","Traits and structs for key encapsulation mechanisms"]],"struct":[["PskBundle","Contains preshared key bytes and an identifier. This is intended to go inside an `OpModeR` or `OpModeS` struct."]],"trait":[["Deserializable","Implemented by types that can be deserialized from byte representation"],["Kem","Represents authenticated encryption functionality"],["Serializable","Implemented by types that have a fixed-length byte representation"]]};