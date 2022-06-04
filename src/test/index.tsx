import {ElButton} from "element-plus"

export default defineComponent({
    components: {
        // ElButton
    }
    , props: {}, setup() {
        return () => {
            return (
                <el-button><ep-close/>1</el-button>
            )
        }
    }
})
