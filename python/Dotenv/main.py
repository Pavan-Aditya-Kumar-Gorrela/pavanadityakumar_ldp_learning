import os
import io
from dotenv import (
    find_dotenv,
    load_dotenv,
    dotenv_values,
    get_key,
    set_key,
    unset_key,
)


ENV_FILE = find_dotenv() # locates nearest .env file


"""STANDARD LOADING"""
def standard_loading():
    print("=" * 65)
    print("STAGE 1: STANDARD LOADING & VARIABLE EXPANSION")
    print("=" * 65)

    load_dotenv(dotenv_path= ENV_FILE)

    print(f"APP_NAME      : {os.getenv('APP_NAME')}")
    print(f"APP_ENV       : {os.getenv('APP_ENV')}")
    print(f"PORT          : {os.getenv('PORT')}")
    print(f"DEBUG         : {os.getenv('DEBUG')}")

    print(f"BASE_URL      : {os.getenv('BASE_URL')}")
    print(f"API_ENDPOINT  : {os.getenv('API_ENDPOINT')}")

    print(f"PRIVATE_KEY   :\n{os.getenv('PRIVATE_KEY')[:35]}... (truncated)")
    print(f"DB_PASSWORD   : {os.getenv('DB_PASSWORD')}")

"""PARSING INTO DICT"""
def parsing_dict():
    print("\n" + "=" * 65)
    print("STAGE 2: PARSING TO DICT WITHOUT POLLUTING os.environ")
    print("=" * 65)

    config = dotenv_values(ENV_FILE)

    print(f"Parsed Dict Type: {type(config)}")
    print(f"Direct Access   : APP_NAME={config.get('APP_NAME')}")
    print(f"Is in os.environ? ('APP_NAME' in os.environ before clean): {'APP_NAME' in os.environ}")

"""MULTI FILE CASCADING & OVERRIDES"""
def envi_overrides():
    print("\n" + "=" * 65)
    print("STAGE 3: MULTI-FILE OVERRIDES (.env vs .env.production)")
    print("=" * 65)

    print(f"BEFORE OVERRIDE -> PORT: {os.getenv('PORT')}, ENV: {os.getenv('APP_ENV')}")
    prod_env = find_dotenv(".env.production")
    if prod_env:
        load_dotenv(dotenv_path=prod_env, override=True)
    print(f"AFTER OVERRIDE  -> PORT: {os.getenv('PORT')}, ENV: {os.getenv('APP_ENV')}")

"""STREAM PARSING"""
def stream_loading():
    print("\n" + "=" * 65)
    print("STAGE 4: LOADING SECRETS FROM IN-MEMORY STREAMS")
    print("=" * 65)

    vault_stream_data = """
        VAULT_SECRET_KEY=998877665544332211
        VAULT_SERVICE_NAME=auth_microservice
        """
    stream = io.StringIO(vault_stream_data)
    load_dotenv(stream=stream, override=True)
    print(f"VAULT_SECRET_KEY   : {os.getenv('VAULT_SECRET_KEY')}")
    print(f"VAULT_SERVICE_NAME : {os.getenv('VAULT_SERVICE_NAME')}")


"""READING< UPDATING, DELETING KEYS"""
def modifying_env():
    print("\n" + "=" * 65)
    print("STAGE 5: PROGRAMMATIC READ/WRITE/UNSET TO .env FILE")
    print("=" * 65)

    current_port = get_key(ENV_FILE, "PORT")
    print(f"Current PORT in file : {current_port}")

    set_key(ENV_FILE, "LAST_UPDATED_BY", "python_script_v1")
    set_key(ENV_FILE, "DYNAMIC_PORT", "9090")
    print("Added 'LAST_UPDATED_BY' and 'DYNAMIC_PORT' to .env file.")

    updated_val = get_key(ENV_FILE, "LAST_UPDATED_BY")
    print(f"Verified new key value : {updated_val}")

    unset_key(ENV_FILE, "DYNAMIC_PORT")
    print("Unset 'DYNAMIC_PORT' from .env file.")

modifying_env()


if __name__ == "__main__":
    standard_loading()
    parsing_dict()
    envi_overrides()
    stream_loading()
    modifying_env()