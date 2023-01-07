import {isEmpty, isArray} from 'lodash';
import Link from 'next/link';
// import {getIconComponentByName} from '../../utils/icons-map';
import NewsletterSubscribe from './NewsletterSubscribe';

const Footer = ( {} ) => {
	return (
		<footer className="bg-teal-500 p-6">
			<div className="flex flex-wrap -mx-1 overflow-hidden text-white">

				{/*Widget One*/}
				{/* <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
					<div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarOne ) }}/>
				</div> */}

				{/*Widget Two*/}
				{/* <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
					<div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarTwo ) }}/>
				</div> */}

				<div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
					{/*Mailchimp Newsletter Subscription*/}
					<NewsletterSubscribe/>
				</div>
			</div>

		</footer>
	);
};

export default Footer;