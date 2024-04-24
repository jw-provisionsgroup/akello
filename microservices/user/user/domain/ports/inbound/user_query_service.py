from abc import ABC, abstractmethod
from typing import Optional, List

from user.domain.model.user import User


class UserQueryService(ABC):

    @abstractmethod
    def get(self, user_id: str) -> Optional[User]:
        ...

    @abstractmethod
    def set(self, user: User) -> None:
        ...

    @abstractmethod
    def create(self, user: User) -> None:
        ...

    @abstractmethod
    def get_organizations(self, user_id: str) -> List[str]:
        ...

    @abstractmethod
    def add_organization(self, user: User, organization_id: str) -> None:
        ...