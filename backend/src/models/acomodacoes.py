from config import db

class Acomodacoes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(120), unique=False, nullable=False)
    imagem = db.Column(db.String(200), unique=False, nullable=False)
    preco_noite = db.Column(db.Float, nullable=False)
    localizacao = db.Column(db.String(120),unique=False, nullable=False)

    #Funcao que trasforma em JSON
    def to_json(self):  
        return {
            "id": self.id,
            "nome": self.nome,
            "imagem":self.imagem,
            "preco_noite":self.preco_noite,
            "localizacao":self.localizacao
        }