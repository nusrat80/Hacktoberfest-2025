def binary_search(arr, target):
    """
    Performs binary search on a sorted array to find the target element.
    
    Args:
        arr (list): A sorted list of elements
        target: The element to search for
    
    Returns:
        int: Index of the target element if found, -1 otherwise
    
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        # Check if target is at mid
        if arr[mid] == target:
            return mid
        
        # If target is greater, ignore left half
        elif arr[mid] < target:
            left = mid + 1
        
        # If target is smaller, ignore right half
        else:
            right = mid - 1
    
    # Element not found
    return -1


# Example usage
if __name__ == "__main__":
    # Sorted array
    numbers = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78]
    
    # Search for existing element
    target = 23
    result = binary_search(numbers, target)
    
    if result != -1:
        print(f"Element {target} found at index {result}")
    else:
        print(f"Element {target} not found in array")
    
    # Search for non-existing element
    target = 50
    result = binary_search(numbers, target)
    
    if result != -1:
        print(f"Element {target} found at index {result}")
    else:
        print(f"Element {target} not found in array")
