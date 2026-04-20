Here's the complete `app.py` for a smart calculator web application using Flask:

```python
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    """Render the main calculator page"""
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    """Handle calculation requests from the frontend"""
    try:
        data = request.get_json()
        expression = data['expression']
        
        # Basic safety check - only allow certain characters
        if not all(c in '0123456789+-*/.() ' for c in expression):
            return jsonify({'error': 'Invalid characters in expression'}), 400
        
        # Evaluate the expression safely
        try:
            result = eval(expression, {'__builtins__': None}, {})
        except Exception as e:
            return jsonify({'error': str(e)}), 400
            
        return jsonify({'result': result})
    
    except Exception as e:
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

Here's the accompanying `requirements.txt` file:

```
Flask==2.3.2
```

And here's the directory structure you should have:

```
project/
├── app.py
├── requirements.txt
├── static/
│   └── style.css
└── templates/
    └── index.html
```

The `index.html` and `style.css` files would need to be created separately to complete the application. The Flask app handles:
1. Serving the main calculator page
2. Processing calculation requests via a POST endpoint
3. Basic input validation
4. Safe expression evaluation
5. Error handling

Note that for production use, you might want to:
1. Add more robust input validation
2. Implement a proper expression parser instead of using eval()
3. Add rate limiting
4. Use environment variables for configuration
5. Add proper logging