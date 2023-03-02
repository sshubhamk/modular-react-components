import {
  MdOutlineNotificationsNone, MdOutlineFileDownload,
  MdDeleteOutline, MdOutlineHideSource, MdOutlineDoneAll
} from 'react-icons/md';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => { };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <MdOutlineNotificationsNone className='mr-2' />
          Notification
        </Button>
      </div>

      <div>
        <Button danger outline className="mb-5" onMouseEnter={handleClick}>
          <MdDeleteOutline className='mr-2' />
          Trash
        </Button>
      </div>

      <div>
        <Button warning className="mb-5" onMouseLeave={handleClick}>
          <MdOutlineFileDownload className='mr-2' />
          Invoice
        </Button>
      </div>

      <div>
        <Button secondary outline className="mb-5">
          <MdOutlineHideSource className='mr-2' />
          Hide Ads!
        </Button>
      </div>

      <div>
        <Button primary rounded className="mb-5">
          <MdOutlineDoneAll className='mr-2' />
          Wishlist
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
