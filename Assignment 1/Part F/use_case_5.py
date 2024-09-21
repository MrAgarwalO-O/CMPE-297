from cryptography.fernet import Fernet

def generate_key():
    return Fernet.generate_key()

def encrypt_file(key, input_file, output_file):
    fernet = Fernet(key)
    with open(input_file, 'rb') as file:
        original_data = file.read()
    encrypted_data = fernet.encrypt(original_data)
    with open(output_file, 'wb') as file:
        file.write(encrypted_data)

def decrypt_file(key, input_file, output_file):
    fernet = Fernet(key)
    with open(input_file, 'rb') as file:
        encrypted_data = file.read()
    decrypted_data = fernet.decrypt(encrypted_data)
    with open(output_file, 'wb') as file:
        file.write(decrypted_data)

if __name__ == '__main__':
    key = generate_key()
    input_file = 'plain.txt'
    encrypted_file = 'encrypted.txt'
    decrypted_file = 'decrypted.txt'
    encrypt_file(key, input_file, encrypted_file)
    decrypt_file(key, encrypted_file, decrypted_file)