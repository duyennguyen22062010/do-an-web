import React from "react";

export default function New() {
  return (
    <section id="news">
      <div className="news">
        <div className="row news__wrap">
          <div className="col-xs-12 news__center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#dienAnh"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Điện ảnh 24h
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#review"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#khuyenMai"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Khuyến mãi
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="dienAnh"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row news__box">
                  <div className="col-sm-6 news__top">
                    <div className="news__img">
                      <button>
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/antebellum-an-dinh-ngay-khoi-chieu-chinh-thuc-15900552374091.png"
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    <button>
                      <p className="title__news">
                            Antebellum ấn định ngày khởi chiếu chính thức
                      </p>
                    </button>
                    <p className="news__docs">
                        Từng gây tiếng vang với hàng loạt siêu phẩm kinh dị giật gân đầy ấn tượng, nhà sản xuất của “Get Out” và “Us” tiếp tục tấn công màn ảnh rộng với một trong những tác phẩm kinh dị được chờ đợi nhất năm 2020 - Antebellum.
                    </p>
                  </div>
                  <div className="col-sm-6 news__top">
                    <div className="news__img">
                      <button>
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/david-fincher-bac-thay-su-dung-visual-effects-15900519940266.png"
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    <button>
                      <p className="title__news">
                        David Fincher bậc thầy sử dụng Visual Effects
                      </p>
                    </button>
                    <p className="news__docs">
                        David Fincher có lẽ không phải là một vị đạo diễn nổi tiếng với việc dùng visual effects, nhưng thực tế là, ông bắt đầu sự nghiệp của mình tại ILM vào những năm đầu thập niên 80 khi làm việc cho phim Return of the Jedi. Và có thể bạn .
                    </p>
                  </div>
                </div>
                <div className="row news__bots">
                  <div className="col-sm-4 news__bot">
                    <div className="news__img">
                      <button>
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/thien-linh-cai-chuyen-chua-ke-lam-tot-hon-phien-ban-chieu-rap-that-son-tam-linh-15898838916604.png"
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    <button>
                      <p className="title__news">
                      Thiên Linh Cái: Chuyện Chưa Kể làm tốt hơn phiên bản chiếu rạp Thất Sơn Tâm ...
                      </p>
                    </button>
                    <p className="news__docs">
                    Thiên Linh Cái - Chuyện Chưa Kể đã chính thức ra mắt bản series 5 tập với tổng thời lượng tăng khoảng 50 phút so với bản chiếu rạp.
                    </p>
                  </div>
                  <div className="col-sm-4 news__bot">
                    <div className="news__img">
                      <button>
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/baba-yaga-va-nhung-man-cameo-lam-khan-gia-thot-tim-tren-man-anh-rong-15895152961422.png"
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    <button>
                      <p className="title__news">
                      Baba Yaga và những màn cameo làm khán giả thót tim trên màn ảnh rộng!
                      </p>
                    </button>
                    <p className="news__docs">
                    Mụ phù thủy ăn thịt trẻ con Baba Yaga vốn là “nỗi ám ảnh” của tuổi thơ biết bao thế hệ vùng Đông Âu. Từ đó, Baba Yaga cũng trở thành nguồn cảm hứng 
                    </p>
                  </div>
                  <div className="col-sm-4 news__bot">
                    <div className="small__news">
                      <div className="img__small">
                        <button>
                          <img
                            src="https://s3img.vcdn.vn/123phim/2020/05/trailer-truyen-thuyet-ve-quan-tien-ngap-tran-bi-an-tu-cau-chuyen-khi-vuon-hiep-nguoi-den-can-benh-co-dan-ong-la-khoi-ngay-15891896054703.png"
                            alt=""
                          />
                        </button>
                      </div>
                      <button>
                        <p className="small__docs">
                        Trailer “Truyền Thuyết Về Quán Tiên”: ngập tràn bí ẩn từ câu...
                        </p>
                      </button>
                    </div>
                    <div className="small__news">
                      <div className="img__small">
                        <button>
                          <img
                            src="https://s3img.vcdn.vn/123phim/2020/05/nhung-yeu-to-dang-mong-doi-cua-bang-chung-vo-hinh-15891853448581.png"
                            alt=""
                          />
                        </button>
                      </div>
                      <button>
                        <p className="small__docs">
                        Những yếu tố đáng mong đợi của Bằng Chứng Vô Hình
                        </p>
                      </button>
                    </div>
                    <div className="small__news">
                      <div className="img__small">
                        <button>
                          <img
                            src="https://s3img.vcdn.vn/123phim/2020/05/ba-dong-lin-shaye-cua-insidious-tai-xuat-trong-phim-kinh-di-bay-linh-hon-15891841835409.png"
                            alt=""
                          />
                        </button>
                      </div>
                      <button>
                        <p className="small__docs">
                        ‘Bà đồng’ Lin Shaye của Insidious tái xuất trong phim k...
                        </p>
                      </button>
                    </div>
                    <div className="small__news">
                      <div className="img__small">
                        <button>
                          <img
                            src="https://s3img.vcdn.vn/123phim/2020/05/ccfb798a0c7f7deb76fb8d718b92f406.png"
                            alt=""
                          />
                        </button>
                      </div>
                      <button>
                        <p className="small__docs">
                        RẠP PHIM CHÍNH THỨC MỞ CỬA!
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="news__more">
            <button type="button" className="btn news__button">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
