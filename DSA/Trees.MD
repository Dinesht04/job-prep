# Trees

## DFS
pretty straight forward, call recursively till node == null or condition has been found.

## BFS
Okay so this was a new Algorithm, using queues.
So first we add the root node to the queue
while the queue isnt empty
    we loop through the queue's initial size
        On each iteration, we pop the head, and add it's left and right node to the queue.
    (since queue is first in first out, and we stored the initial size, it will reomove exactly those number of nodes which were there in the above level).
    we make a list of the nodes we pop, and add it to the main list.