<template>
	<div id="payPwd">
		<header>支付密码设置</header>
		<input ref="pwd" type="tel" maxlength="6" v-model="msg" class="pwd" unselectable="on" />
		<ul class="pwd-wrap" @click="focus">
			<li :class="msg.length == 0?'psd-blink':''"><i v-if="msg.length > 0"></i></li>
			<li :class="msg.length == 1?'psd-blink':''"><i v-if="msg.length > 1"></i></li>
			<li :class="msg.length == 2?'psd-blink':''"><i v-if="msg.length > 2"></i></li>
			<li :class="msg.length == 3?'psd-blink':''"><i v-if="msg.length > 3"></i></li>
			<li :class="msg.length == 4?'psd-blink':''"><i v-if="msg.length > 4"></i></li>
			<li :class="msg.length == 5?'psd-blink':''"><i v-if="msg.length > 5"></i></li>
		</ul>
		<button type="button" @click="sendCode">获取验证码 lodding</button>
	</div>
</template>
<script>
	import api from "./api";
	import "@/js/utils"; //公共方法
	export default {
		components: {},
		data() {
			return {
				msg: '',
			}
		},
		created() {},
		computed: {},
		watch: {
			msg(curVal) {
				if(/[^\d]/g.test(curVal)) {
					this.msg = this.msg.replace(/[^\d]/g, '');
				}
			},
		},
		methods: {
			focus() {
				this.$refs.pwd.focus();
			},
			sendCode() {
				//时间
				utils.sendCode(event.target);

				//showLoading
				utils.view.showLoading();

				setTimeout(function() {
					utils.view.dismissLoading();
				}, 5000);
			}
		},
		mounted() {}
	}
</script>
<style lang="less" scoped>
	#payPwd {
		height: auto;
		header {
			text-align: center;
			height: 80px;
			line-height: 90px;
			text-align: center;
		}
		input[type=tel] {
			width: 0.1px;
			height: 0.1px;
			color: transparent;
			position: relative;
			top: 23px;
			background: #000000;
			left: 46px;
			border: none;
			font-size: 18px;
			opacity: 0;
			z-index: -1;
		}
		//光标
		.psd-blink {
			display: inline-block;
			background: url("./img/blink.gif") no-repeat center;
		}
		.pwd-wrap {
			width: 90%;
			height: 50px;
			padding-bottom: 1px;
			margin: 0 auto;
			background: #fff;
			border: 1px solid #ddd;
			display: flex;
			display: -webkit-box;
			display: -webkit-flex;
			cursor: pointer;
			position: absolute;
			left: 0;
			right: 0;
			top: 13%;
			z-index: 10;
			li {
				list-style-type: none;
				text-align: center;
				line-height: 50px;
				-webkit-box-flex: 1;
				flex: 1;
				-webkit-flex: 1;
				border-right: 1px solid #ddd;
				&:last-child {
					border-right: 0;
				}
				i {
					height: 10px;
					width: 10px;
					border-radius: 50%;
					background: #000;
					display: inline-block;
				}
			}
		}
		button {
			position: relative;
			display: block;
			height: 41px;
			text-align: center;
			margin: 0 auto;
			margin-top: 70%;
			padding: 0 20px;
			border-radius: 5px;
			font-size: 16px;
			border: 1px solid #dddddd;
			background: #dddddd;
			color: #000000;
		}
	}
</style>