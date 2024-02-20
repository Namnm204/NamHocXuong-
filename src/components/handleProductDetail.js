import instance from "../api";

const handleProductDetail = (data) => {
  const id = data.id;
  const productDetail = document.getElementById("productDetail");
  if (id) {
    instance
      .get(`/products/${id}`)
      .then(({ data }) => {
        productDetail.innerHTML = `
          <div class="">
            <div class="anh_chitiet">
              <img src="${data.thumbnail}" alt="${data.title}" />
            </div>
            <div class="danhsach">
              <div class="danhsach_infor">
                <h1>${data.title}</h1>
                <div>Giá: ${data.price}</div>
                <p>Sẵn hàng: ${data.stock}</p>
                <p>Đánh giá: ${data.rating}</p>
                <p>Mô tả: ${data.description}</p>
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
