project = "notificasaude"
environment = "prod"
is_production = true
vpc_cidr_block = "10.105.0.0/16"
vpc_subnet_a_cidr_block = "10.105.1.0/24"
vpc_subnet_b_cidr_block = "10.105.2.0/24"
hosted_zone = "notificasaude.com.br"
ecs_ami = "ami-0b84afb18c43907ba"
ecs_instance_type = "t3.medium"
ecs_max_instance_size = "2"
ecs_min_instance_size = "1"
ecs_desired_capacity = "1"
