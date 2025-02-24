import './acomodationDetail.css'

function AcomodationDetail({ data }) {

    return (
        <>
            <div className="container">

                <img className="container-img mt-5" src={data.imagem} alt={data.nome} />

                <div className='desc mb-5'>
                    <div className='desc-main'>
                        <h1>{data.nome}</h1>
                        <h5>Localização: {data.localizacao}</h5>
                    </div>
                    <h1 className='price'>
                        R${data.preco_noite}/noite
                    </h1>
                </div>
            </div >
        </>
    );

}
export default AcomodationDetail;
