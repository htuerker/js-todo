import Todo from "./Todo";

const priorityColors = ['LightBlue', 'khaki', 'LightCoral'];

export default function PriorityBullet(todo) {
    const priorityBullet = document.createElement('span');
    priorityBullet.innerHTML = '⬤';
    priorityBullet.className = 'priority-bullet';
    priorityBullet.style.color = priorityColors[todo.priority];

    return priorityBullet;
}
