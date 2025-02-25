# Usar uma imagem oficial do Python
FROM python:3.9

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do backend
COPY ./requirements.txt /app/requirements.txt

# Instalar as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo o código-fonte do backend
COPY src/ ./src

# Definir a variável de ambiente para o Flask
ENV FLASK_APP=src/main.py
ENV FLASK_RUN_HOST=0.0.0.0

# Expor a porta 5000 para o Flask
EXPOSE 5000

# Comando para rodar o backend
CMD ["flask", "run"]
