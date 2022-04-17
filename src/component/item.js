import { useState } from "react";

function Item(props) {
    const [angk,SetAngk] = useState(1);
    const jumlah = () =>{
        SetAngk(angk + 1);
    }
    return(
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="/image.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Nama Coin : {props.coin}</h5>
              <p className="card-text">text Detail</p>
              <p className="card-text">Harga :{props.Harga}</p>
              <p className="card-text">Jumlah Pembelian : {angk}</p>
              <a href="#" onClick={jumlah} className="btn btn-primary">Tambah Item</a>
            </div>
        </div>
    )
}
export default Item;