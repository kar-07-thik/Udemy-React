import sale from "../assets/images/sale.jpg";

function Ad(){

    return(
          <div class="saleimage">
        <img src={sale} alt="Sale "></img>
        <div class="sale-image-offer">
            <h2>Udemy Flash Sala! 24 hours to save.</h2>
            <p>Get the top Courses for just 499rs. Just one day to save but a lifetime learn</p>

        </div>
    </div>
    )
}
export default Ad