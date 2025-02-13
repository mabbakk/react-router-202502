import styles from './ErrorPage.module.scss';
import {Link, useRouteError} from 'react-router-dom';

const ErrorPage = () => {

    // 발생한 에러정보 (throw로 던져지거나 401에러 발생 시) 가져오기
    const error = useRouteError();


    return (
        <div className={styles.error}>
            <h1 className={styles.title}>앗! 문제가 발생했어요</h1>
            <p className={styles.message}>
                {error.status === 404
                    ? '페이지를 찾을 수 없습니다'
                    : '오류가 발생했습니다'}
            </p>
            <Link
                to='/'
                className={styles.button}>
                홈으로 돌아가기
            </Link>
        </div>
    );
}

export default ErrorPage