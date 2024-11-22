import React from 'react'
import { Contact } from '../data/footerData'
import Heading from './Heading';

const FooterMain = () => {
  return (
    <div className='flex text-[#F5F5F5] max-lg:flex-wrap ml-5 gap-5'>
      <div className='flex gap-5'>
        {
          Contact.map((item, i) => <div key={i}>
            <Heading className={'text-white'}
            cssHr={'bg-white w-[84px]'}>{item.city}</Heading>
            {
              item.address.map((adr, i) => <div key={i} className='mt-3'>
                <h4 className='font-bold'>{adr.address}</h4>
                <div><span className='font-bold'>Hotline:</span> {adr.phone}</div>
                <p><span className='font-bold'>Địa chỉ:</span> {adr.details}</p>
              </div>)
            }
          </div>)
        }
      </div>
      <div className='font-bold'>
        <Heading className={'text-white'} cssHr={'bg-white w-[84px]'}>Hotline</Heading>
        <p>Khiếu nại CEO: 0982 521 378</p>
        <p>Khiếu nại DCEO: 0916 442 368</p>
        <p>Hợp tác truyền thông: 0934 146 016</p>
        <p>Hợp tác kinh doanh: 0961 123 988</p>
        <p>Khiếu nại dịch vụ CSKH: 024 7106 8368</p>
        <p>Tư vấn khóa học 1</p>
        <p>Ms. Khánh Ly 0352 433 233</p>
        <p>Tư vấn khóa học 2</p>
        <p>Ms. Ngọc Linh 0344 463 698</p>
        <p>CSKH: cskh@mcivietnam.com</p>
        <p>Chính sách bảo mật</p>
      </div>
    </div>
  )
}

export default FooterMain