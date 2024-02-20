import instance from "../api";

const handleProductDetail = (data) => {
  const id = data.id;
  const productDetail = document.getElementById("productDetail");
  if (id) {
    instance
      .get(`/products/${id}`)
      .then(({ data }) => {
        productDetail.innerHTML = `
          <div class="box">
            <div class="anh_chitiet">
              <img src="${data.thumbnail}" alt="${data.title}" />
            </div>
            <div class="danhsach">
              <div class="danhsach_infor">
                <h1>${data.title}</h1>
                <div class="giaspct">Giá: ${data.price}</div>
                <p class="shspct">Sẵn hàng: ${data.stock}</p>
                <p class="dgspct">Đánh giá: ${data.rating}</p>
                <p class="motaspct">Mô tả: ${data.description}</p>
                <button>ĐẶT HÀNG NGAY</button>
              </div>
            </div>
          </div>
        `;
      })
      .catch(() => {
        productDetail.innerHTML = `
          <h2>Sản phẩm không tồn tại</h2>
          <a href="/">Quay lại trang chủ</a>
        `;
      });
  }
};
export default handleProductDetail;
