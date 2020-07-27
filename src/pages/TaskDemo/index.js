import React from 'react';


function TaskDemo() {
    task();
    return (
        <div>
            宏任务与微任务
        </div>
    )
}

/**
 * javaScript宏任务与微任务
 * 参考链接 https://www.cnblogs.com/Ryan368/p/11338717.html
 * 宏任务队列----微任务队列（下一个宏任务里的微任务还没有加入到微任务队列里）-----宏任务队列-----微任务队列
 * 宏任务队列可以有多个 微任务队列只有一个
 * 创建宏任务的有：setTimeout() setInterval() requestAnimationFrame()
 * 创建微任务的有：Promise回调 process.nextTick
 *
 *
 * 执行结果 宏任务（ 1 5 8 ） 微任务（ 6 ） 宏任务（ 2 3 ）微任务（ 4 ） 宏任务（ 7 ）
 */
function task() {
    console.log('task1');

    setTimeout(() => {
        console.log('task2');
        new Promise((resolve) => {
            console.log('task3');
            resolve();
        }).then(() => {
            console.log('task4');
        })
    }, 0);

    new Promise((resolve) => {
        console.log('task5');
        resolve();
    }).then(() => {
        console.log('task6');
    });

    setTimeout(() => {
        console.log('task7');
    }, 0);

    console.log('task8');
}

export default TaskDemo;
