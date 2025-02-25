from flask import Flask, request, jsonify

app = Flask(__name__)

tasks = [
    {"id": 1, "title": "Learn Flask", "description": "Study Flask framework"},
    {"id": 2, "title": "Build a REST API", "description": "Create a simple REST API"}
]

new_task_id = 3

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})


@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Task not found'})
    return jsonify({'task': task})

@app.route('/tasks', methods=['POST'])
def create_task():
    global new_task_id
    if not request.json or not 'title' in request.json or not 'description' in request.json:
        return jsonify({'error': 'Bad Request'})
    task = {
        "id": new_task_id,
        "title": request.json['title'],
        "description": request.json['description']
    }
    tasks.append(task)
    new_task_id += 1
    return jsonify({'task': task})

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Task not found'})
    task['title'] = request.json['title']
    task['description'] = request.json['description']
    return jsonify({'task': task})


@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Task not found'})
    tasks.remove(task)
    return jsonify({'result_of_delete': True})


if __name__ == '__main__':
    app.run(debug=True)
