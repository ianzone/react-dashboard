import { theme } from 'antd';
import RingLoader from 'react-spinners/RingLoader';

export function Spinner() {
	const { token } = theme.useToken();
	return <RingLoader color={token.colorPrimary} />;
}
