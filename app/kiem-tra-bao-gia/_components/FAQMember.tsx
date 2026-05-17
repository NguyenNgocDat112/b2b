import { useState } from 'react';
import Banner from "../../../assets/images/bannerBG.png"
export default function FAQMembershipUI() {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqs = [
    {
      question: 'Gói Hội viên cung cấp các quyền lợi hàng tháng như thế nào?',
      answer:
        'Các quyền lợi sẽ được cập nhật định kỳ mỗi tháng và tự động áp dụng vào tài khoản của bạn.',
    },
    {
      question:
        'Sau khi đăng ký Gói Hội viên thành công, các voucher đăng tin/đẩy tin sẽ được lưu ở đâu?',
      answer:
        'Sau khi đăng ký Gói Hội viên, voucher đăng tin/đẩy tin sẽ được lưu tại mục “Khuyến mãi” trong tài khoản đăng tin của bạn.',
    },
    {
      question: 'Tôi có thể quản lý các quyền lợi trong Gói Hội viên đã mua như thế nào?',
      answer:
        'Bạn có thể quản lý toàn bộ quyền lợi trong phần quản lý gói hội viên trên hệ thống.',
    },
    {
      question: 'Gói Hội viên của tôi sẽ gia hạn như thế nào?',
      answer:
        'Gói sẽ tự động gia hạn theo chu kỳ thanh toán mà bạn đã lựa chọn trước đó.',
    },
    {
      question: 'Tôi có thể hủy Gói Hội viên nếu không cần nữa không?',
      answer:
        'Bạn hoàn toàn có thể hủy gia hạn bất kỳ lúc nào trong phần cài đặt tài khoản.',
    },
    {
      question: 'Tôi có thể mua bao nhiêu Gói Hội viên trong một thời điểm?',
      answer:
        'Mỗi tài khoản chỉ được kích hoạt một gói hội viên tại cùng một thời điểm.',
    },
    {
      question:
        'Nếu tôi hạ tin đăng đã sử dụng voucher Gói Hội viên, tôi có được hoàn lại voucher không?',
      answer:
        'Voucher đã sử dụng sẽ không được hoàn lại sau khi đã áp dụng thành công.',
    },
  ];

  return (
    <div className=" bg-[#fff] px-4 py-10 lg:px-10">
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-5 lg:grid-cols-[1fr_340px]">
        {/* LEFT */}
        <div>
          <h1 className="mb-2 text-[22px] font-semibold leading-none tracking-[0.03em] text-[#1f2937]">
            Câu hỏi thường gặp
          </h1>

          <div className="overflow-hidden rounded-md bg-transparent">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="border-b text-xs py-4 border-[#e6e6e6]/80"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(isOpen ? 0 : index)
                    }
                    className="flex w-full items-center justify-between gap-4  text-left"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[22px] font-light leading-none text-[#ff4d4f]">
                        {isOpen ? '−' : '+'}
                      </span>

                      <span className="text-[14px] font-semibold leading-[1.6] text-[#1f2937]">
                        {faq.question}
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-7.5  text-[14px] leading-6 text-[#4b5563]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
          <div className="flex h-full w-[350px] flex-col justify-between">
         
              <img
                src={Banner.src}
                alt="support"
                className='w-full h-full object-cover'
              />
          </div>
      </div>
    </div>
  );
}
