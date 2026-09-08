<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>User CRUD</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>
  body { background: #f4f6f9; }
  .card { border: none; border-radius: 14px; box-shadow: 0 4px 18px rgba(0,0,0,0.06); }
  .table thead th { background: #212529; color: #fff; font-weight: 500; }
  .badge-age { background: #6c5ce7; }
  .btn-icon { padding: 4px 10px; }
  #searchInput { max-width: 280px; }
</style>
</head>
<body>

<div class="container py-5">
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h3 class="fw-bold mb-0"><i class="fa-solid fa-users me-2 text-primary"></i>User Records</h3>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">
      <i class="fa-solid fa-plus me-1"></i> Add User
    </button>
  </div>

  <div class="card p-3">
    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
      <input type="text" id="searchInput" class="form-control" placeholder="Search by username or city...">
      <span class="text-muted small">3 record(s)</span>
    </div>

    <div class="table-responsive">
      <table class="table table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Age</th>
            <th>City</th>
            <th class="text-end">Actions</th>
          </tr>
        </thead>
        
        <tbody id='userTable'>

        </tbody>

      </table>
    </div>
  </div>
</div>

<!-- Add/Edit Modal -->
<div class="modal fade" id="userModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content rounded-4">
      <div class="modal-header">
        <h5 class="modal-title">Add User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">



        <form>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" id="username" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Age</label>
            <input type="number" id="age" class="form-control" min="1" max="120" required>
          </div>
          <div class="mb-3">
            <label class="form-label">City</label>
            <input type="text" id="city" class="form-control" required>
          </div>
        </form>




      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button> -->
        <button type="button" id="save" class="btn btn-primary"><i class="fa-solid fa-save me-1"></i>Save</button>
      </div>
    </div>
  </div>
</div>

<!-- Delete Confirm Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content rounded-4">
      <div class="modal-body text-center py-4">
        <i class="fa-solid fa-triangle-exclamation fa-2x text-danger mb-3"></i>
        <p class="mb-0">Delete this user?</p>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" id="confirmDelete" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js" ></script>
</body>
</html>