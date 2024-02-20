import instance from "../api";

const ProductList = async () => {
  const productList = document.getElementById("productList");
  instance.get("/products").then((res) => {
    const data = res.data;
    productList.innerHTML = `
          ${data
            .map((product) => {
              return `
              <div class="box_sp">
                <div class="anhsp" ><img class="anhsp" src="${product.thumbnail}" alt="" /></div>
                <div class="tieudesp">${product.title}</div>
                <div class="giasp">Giá: ${product.price}</div>
                <div class="motasp">Mô Tả: ${product.description}</div>
                <div class="xemchitiet"><a href="/Detail/${product.id}">Xem Chi Tiết</a></div>
              </div>
            `;
            })
            .join("")}
          `;
  });
};

export default ProductList;
