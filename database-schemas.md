# Laravel Database Schemas - Legal Case Management System

## Core Tables

### 1. Users Table
```sql
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    email_verified_at TIMESTAMP NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    national_id VARCHAR(50) UNIQUE,
    role ENUM('admin', 'judge', 'lawyer', 'citizen', 'staff') DEFAULT 'citizen',
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    remember_token VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. Courts Table
```sql
CREATE TABLE courts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type ENUM('supreme', 'civil', 'criminal', 'family', 'labor', 'administrative') NOT NULL,
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(255),
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 3. Judges Table
```sql
CREATE TABLE judges (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    court_id BIGINT UNSIGNED NOT NULL,
    employee_number VARCHAR(50) UNIQUE NOT NULL,
    position VARCHAR(100),
    specialization VARCHAR(100),
    appointment_date DATE,
    status ENUM('active', 'retired', 'transferred') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (court_id) REFERENCES courts(id) ON DELETE RESTRICT
);
```

## Case Management Tables

### 4. Cases Table
```sql
CREATE TABLE cases (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    case_number VARCHAR(50) UNIQUE NOT NULL,
    court_id BIGINT UNSIGNED NOT NULL,
    judge_id BIGINT UNSIGNED,
    case_type ENUM('civil', 'criminal', 'family', 'labor', 'administrative') NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    filing_date DATE NOT NULL,
    status ENUM('filed', 'under_review', 'scheduled', 'in_progress', 'completed', 'dismissed', 'appealed') DEFAULT 'filed',
    priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
    estimated_completion_date DATE,
    actual_completion_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (court_id) REFERENCES courts(id) ON DELETE RESTRICT,
    FOREIGN KEY (judge_id) REFERENCES judges(id) ON DELETE SET NULL
);
```

### 5. Case Parties Table
```sql
CREATE TABLE case_parties (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    national_id VARCHAR(50),
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    party_type ENUM('plaintiff', 'defendant', 'witness', 'lawyer', 'guardian') NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);
```

### 6. Case Sessions Table
```sql
CREATE TABLE case_sessions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT UNSIGNED NOT NULL,
    session_date DATETIME NOT NULL,
    session_type ENUM('hearing', 'verdict', 'preliminary', 'appeal') NOT NULL,
    status ENUM('scheduled', 'completed', 'postponed', 'cancelled') DEFAULT 'scheduled',
    notes TEXT,
    verdict TEXT,
    next_session_date DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE
);
```

## Document Management Tables

### 7. Documents Table
```sql
CREATE TABLE documents (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    case_id BIGINT UNSIGNED,
    document_number VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    document_type ENUM('contract', 'certificate', 'judgment', 'evidence', 'petition', 'marriage_contract', 'divorce_certificate', 'will', 'inheritance') NOT NULL,
    file_path VARCHAR(500),
    file_size INT,
    mime_type VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    verification_date DATETIME,
    verified_by BIGINT UNSIGNED,
    issue_date DATE,
    expiry_date DATE,
    status ENUM('draft', 'pending', 'approved', 'rejected', 'expired') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE SET NULL,
    FOREIGN KEY (verified_by) REFERENCES users(id) ON DELETE SET NULL
);
```

## Family Services Tables

### 8. Marriage Contracts Table
```sql
CREATE TABLE marriage_contracts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    contract_number VARCHAR(100) UNIQUE NOT NULL,
    groom_name VARCHAR(255) NOT NULL,
    groom_national_id VARCHAR(50) NOT NULL,
    groom_age INT NOT NULL,
    bride_name VARCHAR(255) NOT NULL,
    bride_national_id VARCHAR(50) NOT NULL,
    bride_age INT NOT NULL,
    witness1_name VARCHAR(255) NOT NULL,
    witness1_national_id VARCHAR(50) NOT NULL,
    witness2_name VARCHAR(255) NOT NULL,
    witness2_national_id VARCHAR(50) NOT NULL,
    dowry DECIMAL(15,2),
    marriage_date DATE NOT NULL,
    contract_date DATE NOT NULL,
    status ENUM('active', 'divorced', 'annulled') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 9. Divorce Records Table
```sql
CREATE TABLE divorce_records (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    marriage_contract_id BIGINT UNSIGNED NOT NULL,
    divorce_number VARCHAR(100) UNIQUE NOT NULL,
    husband_name VARCHAR(255) NOT NULL,
    wife_name VARCHAR(255) NOT NULL,
    divorce_type ENUM('mutual_consent', 'judicial', 'khula', 'mubarat') NOT NULL,
    divorce_reason TEXT,
    children_count INT DEFAULT 0,
    custody_arrangement TEXT,
    financial_settlement DECIMAL(15,2),
    divorce_date DATE NOT NULL,
    status ENUM('pending', 'finalized', 'appealed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (marriage_contract_id) REFERENCES marriage_contracts(id) ON DELETE RESTRICT
);
```

## Service Request Tables

### 10. Service Requests Table
```sql
CREATE TABLE service_requests (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    request_number VARCHAR(100) UNIQUE NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    service_type ENUM('case_inquiry', 'document_verification', 'marriage_contract', 'divorce_certificate', 'will_registration', 'inheritance_certificate', 'court_session_postponement') NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    request_data JSON,
    status ENUM('submitted', 'under_review', 'approved', 'rejected', 'completed') DEFAULT 'submitted',
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    assigned_to BIGINT UNSIGNED,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP NULL,
    completed_at TIMESTAMP NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL
);
```

## Knowledge Base Tables

### 11. Legal Articles Table
```sql
CREATE TABLE legal_articles (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    content LONGTEXT NOT NULL,
    summary TEXT,
    category ENUM('civil_law', 'criminal_law', 'family_law', 'labor_law', 'administrative_law', 'procedures') NOT NULL,
    author_id BIGINT UNSIGNED NOT NULL,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    views_count INT DEFAULT 0,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE RESTRICT
);
```

### 12. User Guides Table
```sql
CREATE TABLE user_guides (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    steps JSON NOT NULL,
    category VARCHAR(100),
    order_index INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Media and News Tables

### 13. News Articles Table
```sql
CREATE TABLE news_articles (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    summary TEXT,
    content LONGTEXT NOT NULL,
    category ENUM('news', 'events', 'announcements') NOT NULL,
    featured_image VARCHAR(500),
    author_id BIGINT UNSIGNED NOT NULL,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    views_count INT DEFAULT 0,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE RESTRICT
);
```

### 14. Media Gallery Table
```sql
CREATE TABLE media_gallery (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    media_type ENUM('image', 'video') NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    thumbnail_path VARCHAR(500),
    file_size INT,
    duration INT, -- for videos in seconds
    event_date DATE,
    is_featured BOOLEAN DEFAULT FALSE,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Communication Tables

### 15. Contact Messages Table
```sql
CREATE TABLE contact_messages (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    category ENUM('service_improvement', 'website_development', 'process_simplification', 'complaint', 'other') NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status ENUM('new', 'in_progress', 'resolved', 'closed') DEFAULT 'new',
    assigned_to BIGINT UNSIGNED,
    response TEXT,
    responded_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL
);
```

### 16. Judges Program Applications Table
```sql
CREATE TABLE judges_program_applications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    application_number VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    education TEXT NOT NULL,
    experience TEXT,
    motivation TEXT NOT NULL,
    status ENUM('submitted', 'under_review', 'interview_scheduled', 'accepted', 'rejected') DEFAULT 'submitted',
    interview_date DATETIME,
    notes TEXT,
    reviewed_by BIGINT UNSIGNED,
    reviewed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (reviewed_by) REFERENCES users(id) ON DELETE SET NULL
);
```

## System Tables

### 17. FAQ Table
```sql
CREATE TABLE faqs (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(500) NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(100),
    order_index INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    views_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 18. System Settings Table
```sql
CREATE TABLE system_settings (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    key_name VARCHAR(100) UNIQUE NOT NULL,
    value TEXT,
    description VARCHAR(255),
    type ENUM('string', 'number', 'boolean', 'json') DEFAULT 'string',
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 19. Activity Logs Table
```sql
CREATE TABLE activity_logs (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED,
    action VARCHAR(100) NOT NULL,
    model_type VARCHAR(100),
    model_id BIGINT UNSIGNED,
    description TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);
```

## Indexes and Constraints

```sql
-- Additional indexes for performance
CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_cases_court_judge ON cases(court_id, judge_id);
CREATE INDEX idx_cases_filing_date ON cases(filing_date);
CREATE INDEX idx_documents_type_status ON documents(document_type, status);
CREATE INDEX idx_service_requests_user_status ON service_requests(user_id, status);
CREATE INDEX idx_news_published ON news_articles(published_at, status);
CREATE INDEX idx_activity_logs_user_created ON activity_logs(user_id, created_at);
```

## Relationships Summary

1. **Users** → One-to-Many with Cases (as parties), Service Requests, News Articles
2. **Courts** → One-to-Many with Judges, Cases
3. **Judges** → One-to-Many with Cases
4. **Cases** → One-to-Many with Case Parties, Case Sessions, Documents
5. **Marriage Contracts** → One-to-Many with Divorce Records
6. **Service Requests** → Belongs to User, assigned to Staff
7. **Documents** → Can belong to Cases, verified by Users
8. **News/Media** → Created by Users (authors)
9. **Contact Messages** → Can be assigned to Staff users

This schema supports all the features identified in the application including case management, document verification, family services, knowledge base, media center, and contact management.