import { useState } from 'react';
import { Modal } from 'antd';

const  Vi = () => {
  const [fsYes, setFsYes] = useState(40)
  const [fs, setFs] = useState(15)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [open, setOpen] = useState(false);
  const clickNo = () => {
    document.getElementById("yes").style.left = "50%";
    document.getElementById("yes").style.transform = "translateX(-50%)";
    document.getElementById("yes").style.fontSize = fsYes + "px";
    setFsYes(fsYes + 20)

    document.getElementById("no").style.top = top + "%";
    document.getElementById("no").style.left = left + "%";
    document.getElementById("no").style.fontSize = fs + "px";

    setTop(random(0, 100))
    setLeft(random(0, 100))
    setFs(fs - 5)
    if (fs === 0) {
      document.getElementById("no").style.display = "none";
    }
  }

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const clickYes = () => {
    setOpen(true);
  }

  const hoverNo = () => {
    document.getElementById("anh").src = require('../img/cho-nhech-mep.jpg');
  }

  const hoverYes = () => {
    document.getElementById("anh").src = require('../img/cho-ban-tym.jpg');
  }

  const leaveYes = () => {
    document.getElementById("anh").src = require('../img/cho-ngai-ngung.jpg');
  }

  const handleOk = () => {

  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className='over' >
      <div className='container'>
        <p className='container__title'>Tết này lì xì cho tao nhé !</p>
        <img id='anh' src={require('../img/cho-ngai-ngung.jpg')} className='img' alt='anh-cho' />
        <div className='div__button'>
          <button id='no' className='button button__fail' onClick={clickNo}
            onMouseEnter={hoverNo} onMouseLeave={leaveYes} >
            Đéo
          </button>
          <button id='yes' className='button button__success'
            onClick={clickYes} onMouseEnter={hoverYes}
            onMouseLeave={leaveYes} >
            Nhất trí
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className='modal__content'>
          <img id='anh' src={require('../img/cam-on.jpg')} className='img' alt='anh-cho' />
          <p className='modal__title'>Đúng là bạn iu của tui hehe</p>
          <p className='modal__des'>STK đây nha: 46610001286932</p>
          <p className='modal__des'>Ngân hàng: BIDV bank</p>
          <p className='modal__des'>Chủ tài khoản: Đỗ Thị Hồng Vi </p>
        </div>
      </Modal>
    </div>
  );
}

export default Vi;
