import styles from './BlogFilter.module.scss';

import { categories } from '../assets/dummy-data';
import { useSearchParams } from 'react-router-dom';

const BlogFilter = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    // 카테고리 옵션 선택 이벤트
    const handleCategoryChange = e => {
        // 카테고리를 선택하면 option태그의 value를 읽어서
        // 쿼리스트링으로 ?category=react 만들어줘야함
        setSearchParams(prev => {
            prev.set('category', e.target.value);
            return prev;
        });
    };

    // 정렬 옵션 선택시 이벤트
    const handleSortChange = e => {
        setSearchParams(prev => {
            prev.set('sort', e.target.value);
            return prev;
        });
    }

    // 검색 이벤트
    const handleSearch = e => {
        setSearchParams(prev => {
            prev.set('search', e.target.value);
            return prev;
        })
    }

    return (
        <div className={styles.filter}>
            <select
                onChange={handleCategoryChange}
                value={searchParams.get('category') || 'all'}
            >
                {
                    categories.map(({ id, name }) => <option key={id} value={id}>{ name }</option>)
                }
            </select>

            <select
                onChange={handleSortChange}
                value={searchParams.get('sort') || 'latest'}
            >
                <option value='latest'>최신순</option>
                <option value='oldest'>오래된순</option>
            </select>

            <input
                type='text'
                placeholder='검색어를 입력하세요'
                onChange={handleSearch}
                value={searchParams.get('search') || ''}
            />
            {/*입력하는 검색어가 실시간으로 나오게 = onChange, 검색 아이콘을 클릭해서 검색 = onClick*/}
        </div>
    );
}

export default BlogFilter;