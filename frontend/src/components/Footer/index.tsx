import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <div className="p-3 min-h-[200px] bg-[#e0e8f7] flex items-center justify-center">
        <div className="flex justify-between w-[1000px] px-3">
          <div className="text-xl font-bold text-[#0F9C58]">
            <p className="mb-4">Đồ án tốt nghiệp 2023</p>
            <p>Được tạo bởi 3P Team</p>
          </div>
          <div>
            <h3 className="text-xl text-[#333] font-bold">Liên hệ</h3>
            <span className="text-[#666]">phuc.tranvinh13@hcmut.edu.vn</span>
          </div>
          <div>
            <h3 className="text-xl text-[#333] font-bold">Theo dõi</h3>
            <div className="flex items-center mb-2">
              <FacebookIcon color="primary" className="scale-125" />
              <span className="text-[#666] ml-1">Facebook</span>
            </div>
            <div className="flex items-center mb-2">
              <LinkedInIcon color="primary" className="scale-125" />
              <span className="text-[#666] ml-1">Likedin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[72px] text-white bg-[#696969]">Copyright @2023</div>
    </footer>
  );
};

export default Footer;
