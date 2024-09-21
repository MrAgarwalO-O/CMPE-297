import unittest

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

class TestMathOperations(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)

    def test_subtract(self):
        self.assertEqual(subtract(3, 2), 1)
        self.assertEqual(subtract(2, 2), 0)

if __name__ == '__main__':
    unittest.main()