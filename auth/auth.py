import jwt

def generate_token(username):
    payload = {'username': username}
    secret_key = 'secret_key'
    token = jwt.encode(payload, secret_key, algorithm='HS256')
    return token

def verify_token(token):
    secret_key = 'secret_key'
    try:
        payload = jwt.decode(token, secret_key, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None