from flask import jsonify, request
from config import app, db
from models.acomodacoes import Acomodacoes

#lista todas
@app.route("/acomodacoes", methods=["GET"])
def get_acomodacoes():
    acomodacoes = Acomodacoes.query.all()
    json_acomodacoes = list(map(lambda x: x.to_json(), acomodacoes))
    return jsonify({"acomodacoes": json_acomodacoes})

#seleciona apenas um imovel
@app.route("/acomodacoes/<int:acomodacao_id>", methods=["GET"])
def get_acomodacao_by_id(acomodacao_id):
    acomodacao = Acomodacoes.query.get_or_404(acomodacao_id)
    return jsonify(acomodacao.to_json())

#filtra por local
@app.route("/acomodacoes/search", methods=["GET"])
def search_acomodacoes():
    local = request.args.get("local")
    if local:
        acomodacoes = Acomodacoes.query.filter_by(localizacao=local).all()
        return jsonify({"acomodacoes": [a.to_json() for a in acomodacoes]})
    return jsonify({"acomodacoes": []})
