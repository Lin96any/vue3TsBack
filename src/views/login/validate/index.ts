import { reactive } from 'vue';
//账户登陆
export  const ValidateAccount = reactive({
    account:[
        {
            required: true,
            message: "请输入登陆账户",
            trigger: "blur",
        },
        {
            pattern: /^[a-zA-Z\d]{4,}$/,
            message: "用户名必须是至少6个字母或者数字",
            trigger: "blur",
        },
    ],
    password:[
        {
            required: true,
            message: "请输入账户密码",
            trigger: "blur",
        },
        {
            pattern: /^[a-z\d]{3,}$/,
            message: "请输入至少3个字符的密码（只能由数字、小写字母组成）",
            trigger: "blur",
        },
    ]
})
