import { PushSpinner } from "react-spinners-kit";

export const Loader = (props) => {
    return <PushSpinner size={30} color="#686769" loading={props.loading} />
}