from config import db
from models.acomodacoes import Acomodacoes


#Adiciona dados iniciais ao banco de dados caso o banco de dados ainda não exista 
def initial_data():
    if Acomodacoes.query.count() == 0:
        acomodacoes_iniciais = [
            Acomodacoes(
                nome="Apartamento Beira-Mar",
                imagem="https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111361/jfgrH1C9x",
                preco_noite=350,
                localizacao="Florianópolis, SC"
            ),
            Acomodacoes(
                nome="Chalé na Serra",
                imagem="https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2182942/DdSs8G3me",
                preco_noite=500,
                localizacao="Campos do Jordão, SP"
            ),
            Acomodacoes(
                nome="Apartamento no Centro",
                imagem="https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111363/PQxf1sNUG",
                preco_noite=200,
                localizacao="Florianópolis, SC"
            ),
            Acomodacoes(
                nome="Cobertura Tatupé",
                imagem="https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111352/ceaypVOgD",
                preco_noite=350,
                localizacao="São Paulo, SP"
            ),  
            Acomodacoes(
                nome="Casa de Praia no Campeche",
                imagem="https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/1893343/bINWGeLUt",
                preco_noite=200,
                localizacao="Florianópolis, SC"
            )
        ]
        db.session.bulk_save_objects(acomodacoes_iniciais)
        db.session.commit()
        print("Dados iniciais inseridos com sucesso!")