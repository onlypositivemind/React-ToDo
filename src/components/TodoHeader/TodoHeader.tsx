import { ThemeSwitcher, NewTodo } from 'components';
import s from './TodoHeader.module.scss';

const TodoHeader = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.left}>
				<h1>Todo</h1>
				<ThemeSwitcher />
			</div>
			<NewTodo />
		</div>
	);
};

export default TodoHeader;