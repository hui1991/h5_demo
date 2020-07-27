
import styles from './style.css'


/**
 * display 设置元素内部和外部显示的类型
 * display-outside 元素外部显示类型
 * block 块级元素   
 * 独占一行,默认情况下宽度充满父布局的宽度,可以设置 width height padding margin,设置了width仍会独占一行
 * inline 行内元素  
 * 不会独占一行,相邻的行内元素会排列在同一行内,直到一行排列不下才会换行 行内元素设置width height marginTop marginBottom paddingTop paddingBottom无效 
 * run in
 * 
 * display-inside 内部显示类型
 * flex Flexible Box 弹性布局
 * 
 * 
 */
const CssDemo = () => {
    return (
        <div className={styles.content}>
            <p className={styles.p}>
                我是一个段落
            </p>
            <div className={styles.display_outside_block}>
                display_outside_block
            </div>
            <span>
                行内元素
            </span>
            <div className={styles.display_outside_inline}>
                display_outside_inline
            </div>
            <span>
                行内元素
            </span>
            <div className={styles.display_outside_inline}>
                display_outside_inline
            </div>
            <div className={styles.display_inside_flex_container}>
                <div className={styles.display_inside_flex_item1}>
                    display_inside_flex_item_1
                </div>
                <div className={styles.display_inside_flex_item2}>
                    display_inside_flex_item_2
                </div>
            </div>
        </div>
    )
}


export default CssDemo