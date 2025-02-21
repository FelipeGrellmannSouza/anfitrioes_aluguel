from flask import request, jsonify
from config import app, db
from models.acomodacoes import Acomodacoes
import routes.acomodacoes_routes  
from seed import initial_data 

#rodando o flask 
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        initial_data()

    app.run(debug=True)
