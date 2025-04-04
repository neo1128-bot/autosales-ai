export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            聯絡我們
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              {/* 姓名 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="請輸入您的姓名"
                  required
                />
              </div>

              {/* 電子郵件 */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  電子郵件
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="請輸入您的電子郵件"
                  required
                />
              </div>

              {/* 公司名稱 */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  公司名稱
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="請輸入您的公司名稱"
                />
              </div>

              {/* 訊息內容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  訊息內容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="請輸入您想詢問的內容"
                  required
                ></textarea>
              </div>

              {/* 送出按鈕 */}
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
