from config import db
from models.acomodacoes import Acomodacoes


#Adiciona dados iniciais ao banco de dados caso o banco de dados ainda não exista 
def initial_data():
    if Acomodacoes.query.count() == 0:
        acomodacoes_iniciais = [
            Acomodacoes(
                nome="Apartamento Beira-Mar",
                imagem="https://via.placeholder.com/300",
                preco_noite=350,
                localizacao="Florianópolis, SC"
            ),
            Acomodacoes(
                nome="Chalé na Serra",
                imagem="https://via.placeholder.com/300",
                preco_noite=500,
                localizacao="Campos do Jordão, SP"
            ),
            Acomodacoes(
                nome="Apartamento no Centro",
                imagem="https://via.placeholder.com/300",
                preco_noite=200,
                localizacao="Florianópolis, SC"
            )
        ]
        db.session.bulk_save_objects(acomodacoes_iniciais)
        db.session.commit()
        print("Dados iniciais inseridos com sucesso!")


