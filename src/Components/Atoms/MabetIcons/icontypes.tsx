import { ReactComponent as MapPin } from '../../../Assets/Icons/MapPin.svg';
import { ReactComponent as MagnifyingGlass } from '../../../Assets/Icons/magnifyingglass.svg';
import { ReactComponent as ArrowDown } from '../../../Assets/Icons/arrowdown.svg';
import { ReactComponent as ShoppingCart } from '../../../Assets/Icons/shoppingcart.svg';
import { ReactComponent as ArrowRight } from '../../../Assets/Icons/arrowright.svg';
import { ReactComponent as HamburgerMenu } from '../../../Assets/Icons/hamburger.svg';
import { ReactComponent as ProfileIcon } from '../../../Assets/Icons/ProfileIcon.svg';
import { ReactComponent as CardVisa } from '../../../Assets/Icons/card-visa.svg';
import { ReactComponent as CardMaestro } from '../../../Assets/Icons/cardmaestro.svg';
import { ReactComponent as CardMastercard } from '../../../Assets/Icons/cardmastercard.svg';
import { ReactComponent as CardVerifiedbyVisa } from '../../../Assets/Icons/cardverifiedbyvisa.svg';
import { ReactComponent as FacebookIcon } from '../../../Assets/Icons/Facebook.svg';
import { ReactComponent as XIcon } from '../../../Assets/Icons/x.svg';
import { ReactComponent as InstagramIcon } from '../../../Assets/Icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../../Assets/Icons/youtube.svg';
import { ReactComponent as Promo } from '../../../Assets/Icons/promo.svg';
import { ReactComponent as WhatsappIcon } from '../../../Assets/Icons/whatsappicon.svg';
import { ReactComponent as Email } from '../../../Assets/Icons/email.svg';
import { default as imgurl } from '../../../Assets/Icons/payment-card.png';

export const iconTypes = {
  mappin: (classValues: string) => <MapPin className={classValues} />,
  promo: (classValues: string) => <Promo className={classValues} />,
  whatsappicon: (classValues: string) => (
    <WhatsappIcon className={classValues} />
  ),
  youtubeicon: (classValues: string) => <YoutubeIcon className={classValues} />,
  xicon: (classValues: string) => <XIcon className={classValues} />,
  facebookicon: (classValues: string) => (
    <FacebookIcon className={classValues} />
  ),
  instagramicon: (classValues: string) => (
    <InstagramIcon className={classValues} />
  ),
  email: (classValues: string) => <Email className={classValues} />,
  cardmaestro: (classValues: string) => <CardMaestro className={classValues} />,
  cardmastercard: (classValues: string) => (
    <CardMastercard className={classValues} />
  ),
  cardverifiedbyvisa: (classValues: string) => (
    <CardVerifiedbyVisa className={classValues} />
  ),
  cardvisa: (classValues: string) => <CardVisa className={classValues} />,
  creditcard: (classValues: string) => (
    <img src={imgurl} className={classValues} alt='Credit card Image' />
  ),
  profileicon: (classValues: string) => <ProfileIcon className={classValues} />,
  hamburger: (classValues: string) => <HamburgerMenu className={classValues} />,
  arrowright: (classValues: string) => <ArrowRight className={classValues} />,

  shoppingcart: (classValues: string) => (
    <ShoppingCart className={classValues} />
  ),

  arrowdown: (classValues: string) => <ArrowDown className={classValues} />,

  magnifyingglass: (classValues: string) => (
    <MagnifyingGlass className={classValues} />
  ),
};
